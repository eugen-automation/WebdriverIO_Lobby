
import allureReporter from '@wdio/allure-reporter';
import { axiosPostRequest, extractDataFromXML, md5 } from './helper.api.ts';
import { API } from './apiChecker.api.ts';
import Data from '../helpers/SessionData.class.ts';



export async function GetJoinToken(tokenData: Data) {
    console.log('@@@ called GetJoinToken()');
    // console.log('tokenData :>> ', tokenData.game);
    try {
        const detailsData = `operatorID=${tokenData.operator.id}&gameID=${tokenData.game.id}&props=limitsetid%3A${tokenData.limit.id}`;

        const accPw = await API.registerToken(tokenData, true);
        const url = `${process.env.API_CLIENT_URL}GetJoinToken`;
        const body = `accessPassword=${accPw.description}&${detailsData}`;

        const responseResult = await axiosPostRequest(url, body);
        const responseData = await getDataFromXML(responseResult);
        
        //@ts-ignore
        return responseData?.response;
        //check for errors
        // if (responseData?.response?.errorCode === '0') { return responseData?.response?.description };

    } catch (err) {
        allureReporter.step(`There is error in API call GetJoinToken(). ${err}`, () => { });
        throw new Error(err);
    }
}
export async function clientGetPlayerBalanceAndExtendLoginToken(tokenData: Data) {
    console.log('@@@ called GetJoinToken()');
    // console.log('tokenData :>> ', tokenData.game);
    try {

        const accPw = await API.registerToken(tokenData, true);
        const detailsData = `registerToken=${accPw.description}&operatorId=${tokenData.operator.id}`//`operatorID=${tokenData.operator.id}&gameID=${tokenData.game.id}&props=limitsetid%3A${tokenData.limit.id}`;

        const url = `${process.env.API_CLIENT_URL}clientGetPlayerBalanceAndExtendLoginToken`;
        const body = `accessPassword=${accPw.description}&${detailsData}`;

        const responseResult = await axiosPostRequest(url, body);
        const responseData = await getDataFromXML(responseResult);
        
        //@ts-ignore
        return responseData?.response;
        //check for errors
        // if (responseData?.response?.errorCode === '0') { return responseData?.response?.description };

    } catch (err) {
        allureReporter.step(`There is error in API call GetJoinToken(). ${err}`, () => { });
        throw new Error(err);
    }
}


async function getDataFromXML(axioPostRequestResponse) {
    // console.log('#$%@$#%@#$%@#$%', functionName);
    // if not undefined
    if (axioPostRequestResponse !== undefined) {
        // parse xml and extract data
        const xmlDataResult = await extractDataFromXML(await axioPostRequestResponse?.data);
        // console.log('@@@extractDataFromXML()  xmlDataResult:', xmlDataResult);
        // @ts-ignore
        // if (xmlDataResult?.response?.errorCode === '0') {
        // @ts-ignore
        return xmlDataResult;
        // }
        // @ts-ignore
        throw new Error(`Failed to extract data from XML response -> errorCode: ${xmlDataResult?.response?.errorCode}, description: ${xmlDataResult?.response?.description}!`);
    }
    return undefined;
}