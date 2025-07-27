import { loadingScreenLocators, notificationLocators } from '../../../selectors/games/commonComponents.sel.ts';
import { notificationCSSPropertiesType, notificationKeyType } from "../../../models/types/notifications.type.ts";

import { config } from '../../../../capabilities/wdio.conf.ts';



export class Notifications {

  get errorPage() { return $(notificationLocators.errorOnGameLoad) }

  get userAction() {
    return {
      notificationText: $(notificationLocators.notificationText),
      notificationContainer: $$(notificationLocators.notificationContainer),
      allNotificationWrapper: $(notificationLocators.allNotificationWrapper),
      warnNotificationContainer: $(notificationLocators.warnNotificationContainer),
    }
  }
  get system() {
    return {
      systemNotification: $(notificationLocators.systemNotification),
      systemNotificationData: $(notificationLocators.systemNotificationData),
      systemNotificationCloseBtn: $(notificationLocators.systemNotificationCloseBtn),
      systemNotificationOkBtn: $(notificationLocators.systemNotificationOkBtn),
    }
  }

  get loadingScreen() {
    return {
      // loading screen
      loadingScreenProgressText: $(loadingScreenLocators.loadingScreenProgressText),
      mainElement: $(loadingScreenLocators.loadingScreen),
      loadingLogo: $(loadingScreenLocators.loadingLogo),
    }
  }

  // error page functions
  async checkForProperErrorNotification() {
    console.log('@@@ checkForProperErrorNotification function was called');

    try {
      // get notification list
      await this.errorPage.waitForDisplayed({ timeout: 10000 });


      // check notification text
      const notificationsTextList = await this.errorPage.getProperty('innerText');
      
      // Remove the /n' from the sentence
      return (notificationsTextList as string).replace(/\n/g, '');           

    } catch (err) {
      throw new Error(err);
    }
  }

  async checkErrorNotifCSSProperties(cssProperties: notificationCSSPropertiesType) {
    console.log('@@@ checkErrorNotifCSSProperties function was called');

    const cssPropObject: any = {};

    try {
      // font-size has a different calculation logic
      for (const k in cssProperties) {

        if (k === 'font-size') {
          cssPropObject[k] = await this.errorPage.getHTML();

        } else {
          cssPropObject[k] = await this.errorPage.getCSSProperty(k);
        }
      }


      // start comparing css properties from JSON and from game
      Object.keys(cssPropObject).forEach((key) => {
        if (key === 'font-size') {
          const position = cssPropObject[key].search('font-size:');
          const foundFontSize = cssPropObject[key].substring(position, position + 17);

          // Check for expected CSS values
          if (foundFontSize !== cssProperties['font-size']) {
          }
        } else {
          // if the json property differs than fail
          if (cssPropObject[key].value !== cssProperties[key]) {
          }
        }
      });

    } catch (err) {
      throw new Error(err)
    }
  }

  // loading screen functions
  async getLoadingScreenProgressText() {
    console.log('@@@ getLoadingScreenProgressText function was called');

    const mySet = new Set();
    try {

      let result = await this.loadingScreen.loadingScreenProgressText.isExisting()
      // console.log("@@@@@@ result1:", result)
      while (result) {
        // console.log("@@@@@@ starting while:", result)

        if (! await this.loadingScreen.loadingScreenProgressText.isExisting()) {

          // console.log('@@@ elem.elementId', elem.elementId)
          break;
        }

        else {
          let text = '';
          try {
            text = await this.loadingScreen.loadingScreenProgressText.getText();
            // console.log('@@@ Captured text:', text);
            // If text is empty, is not added to set
            if (text && text.trim().length > 0) {
              mySet.add(text);
              // console.log("@@@@@@@@ Updated set:", mySet);
              //   console.log('@@@ Text is empty or disappeared');
            }
          } catch (getTextError) {
            // Handle cases where getText fails, such as when the text disappears
            console.warn('Warning: Failed to get text (may have disappeared):', getTextError);

          }
        }

        await browser.pause(100);
        result = await this.loadingScreen.loadingScreenProgressText.isExisting();
        // console.log("@@@@@@ result2:", result)
      }
      const returnValue = Array.from(new Set(mySet));
      return returnValue;
    }
    catch (err) {
      const returnValue = Array.from(new Set(mySet));
      return returnValue;
    }
  }

  // user action functions
  private async getNotificationTextFromElement(notificationElementsList: WebdriverIO.ElementArray): Promise<string[]> {
    console.log('@@@ getNotificationTextFromElement function was called');

    // const notifications = await waitForNotifications();
    const notificationTexts: string[] = [];

    if (!notificationElementsList ) {
      throw new Error('No notifications found.');
    }

    for (const notification of notificationElementsList) {
      const notificationText = await notification.getText();
      notificationTexts.push(notificationText);
    }

    // log.info('!!! Found notification text:', notificationTexts);
    return notificationTexts;
  }

  private async getNotificationElemList(timeout: number = 60000,): Promise<WebdriverIO.ElementArray> {
    console.log('@@@ getNotificationElemList function was called');

    try {

      // log.debug('@@@ getNotificationElemList() called')
      const startTime = new Date().getTime();
      let notifications;
      let logCounter = 0;

      // console.log('outside while:', new Date().getTime() - startTime)
      while (new Date().getTime() - startTime < timeout) {
        // console.log('inside while:')
        // notifications = await $$(notificationContainerLocator);

        // console.log(`${currentTime}______________________________Notifications.length > 0: `, notifications.length > 0);

        if (await (this.userAction.notificationContainer).length > 0) {
          // wait a bit, to see if other notification do not appear
          await browser.pause(200);
          notifications = this.userAction.notificationContainer;
          break;
        }
        if (logCounter === 0) {
          // log.debug('Waiting for notification');
          console.log('Waiting for notification')
        }
        await browser.pause(300);
        logCounter = (logCounter + 1) % 2; // Toggle between 0 and 1 every iteration
        // console.log('logCounter:', logCounter)
      }

      // console.log('______________________________It took time to find the popup, ms: ', new Date().getTime() - startTime);
      return notifications;
    } catch (err) {
      throw new Error(err)
    }
  }

  private async getElementCSSProperties(element: WebdriverIO.Element, cssProperties: notificationCSSPropertiesType) {
    console.log('@@@ getElementCSSProperties function was called');

    const cssPropObject: any = {};

    try {
      const promises = Object.keys(cssProperties).map(async (k) => {
        if (k === 'font-size') {
          //   log.debug('Reading getHTML() ');
          cssPropObject[k] = await element.getHTML();
        } else {
          //   log.debug('Reading CSS property: ', k);
          cssPropObject[k] = await element.getCSSProperty(k);
        }
      });
      // console.log('Before promise.all');
      await Promise.all(promises);
      // console.log('_____________cssPropObject', JSON.stringify(cssPropObject));
      return cssPropObject;
    } catch (err) {
      console.error('Error in checkElementCSSProperties():', err.message);
      // assert.ok(false, `Error in checkElementCSSProperties(): ${err.message}`);
      // return cssPropObject;
      throw new Error(err)
    }
  }

  public async isNotificationDisplayedInCenter(notificationPopupPosition): Promise<Boolean> {
    console.log('@@@ isNotificationDisplayedInCenter function was called');

    if (notificationPopupPosition.x == null) { throw new Error('notificationPopupPosition.x failed'); }
    if (notificationPopupPosition.width == null) { throw new Error('notificationPopupPosition.width failed'); }

    const notificationPopupPositionX = notificationPopupPosition.x;
    const notificationPopupWidth = notificationPopupPosition.width;

    // check if the notification is in the center of the screen
    if (notificationPopupPositionX == null) { throw new Error('notificationPopupPosition.x failed'); }
    if (notificationPopupWidth == null) { throw new Error('notificationPopupPosition.width failed'); }

    // Given values
    // notificationPopupPositionX: number = 155;
    const browserWidth: number = (await browser.getWindowSize()).width;

    // Calculate the center of the browser window
    const browserCenterX: number = browserWidth / 2;

    // Calculate the position of the pop-up's left-upper point relative to the center
    // const popupRelativeX: number = Number((notificationPopupPositionX - browserCenterX).toFixed(1));
    const popupRelativeX: number = Math.trunc(notificationPopupPositionX - browserCenterX);

    // Calculate the maximum allowable deviation
    const maxDeviationX: number = notificationPopupWidth / 2;

    // Check if the pop-up is centered horizontally
    const isCenteredX: boolean = Math.abs(popupRelativeX) <= maxDeviationX;
    // console.log('***************The notification is centered on the screen:', isCenteredX);
    return isCenteredX;
  }

  //new impl. for function that checks only for text
  async getNotificationMessage() {
    console.log('@@@ getNotificationMessage function was called');

    try {

      const notifications = await this.getNotificationElemList();

      const notifMessage = await this.getNotificationTextFromElement(notifications);
      console.info(`Was found notification text: ${notifMessage.toString()}`);
      return notifMessage.toString();
      
    } catch (err) {
      throw new Error(err)
    }
  }

  async getFullNotificationData(expectedNotificationDetails: notificationKeyType) {
    console.log('@@@ getFullNotificationData function was called');

    try {

      // get notification list
      const notifications = await this.getNotificationElemList();

      // if found any notification
      if (notifications && notifications.length > 0) {
        const [foundNotificationText, screenshotBase64, notificationPopupPosition, cssProperties, notifIcon] = await Promise.all([
          this.getNotificationTextFromElement(notifications), //  UserOperationNotifications.getNotificationTextFromElement(notifications),   // get notification text
          browser.saveScreenshot(`${config.screenshotPath}\\notif.png`),   // take screenshot
          browser.getElementRect(notifications[0].elementId),   //get the notification position on the displayed
          this.getElementCSSProperties(notifications[0], expectedNotificationDetails.cssProperties),  // get the element css properties
          notifications[0].$(expectedNotificationDetails.iconLocator) // get the notification icon element
        ]);

        return { notificationText: foundNotificationText, notificationScreenshot: screenshotBase64, notificationPosition: notificationPopupPosition, CSSProperties: cssProperties, notificationIcon: notifIcon }
      }
      else {
        throw new Error(`Have found no notification!`)
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}
