import { BaseGamePage } from '../BasePage.game';
import { BettingArea } from './specificComponents/BettingAreaPage.sc.dt';
import { Roadmap } from './specificComponents/RoadmapPage.sc.dt';
import { StatisticsRoadmap } from './specificComponents/StatisticsRoadmapPage.sc.dt';


export class DragonTigerPage extends BaseGamePage {
     bettingArea: BettingArea;
     roadmap: Roadmap;
     statistics: StatisticsRoadmap;
 

    constructor() {
        super();
        this.bettingArea = new BettingArea();
        this.roadmap = new Roadmap();
        this.statistics = new StatisticsRoadmap();
    }
}