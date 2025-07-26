import ChipsetPo from '../../pageObjects/common/Chipset.comm';
import Data from '../../utils/helpers/SessionData.class.ts';
import { GamesNamesEnum } from '../enums/gameNames.enum.ts';
import { Betspot } from '../types/betspotList.ts';
// import BettingAreaPo from '../../pageObjects/common/Be'


const PYB_MIN_TIMER = 4;
const PYB_WAIT_TIMEOUT = 60;

export interface PlaceBetDataType {
    game: GamesNamesEnum;
    betAmount: number;
    chipset: number[];
    betspots: betspotsType;
    isConfirmToBePressed?: boolean;

    phase: {
        timerPYB: number,
        waitTimeoutPYB: number,
    };
    bjSpecific?: {
        isDealNowToBePressed?: boolean,
        isSeatToBeTaken?: boolean,
    };
    session?: {
        operatorId: string,
        gameType: string,
    }
}

export interface betspotsType {
    betspotsToPlaceBets: Betspot[]
    andarBaharSecondPlaceYourBetsBetspots?: Betspot[]
}

export class PlaceBetData implements PlaceBetDataType {
    game: GamesNamesEnum;
    betAmount: number;
    chipset: number[];
    betspots: betspotsType;
    isConfirmToBePressed?: boolean;

    phase: {
        timerPYB: number,
        waitTimeoutPYB: number,
    };
    bjSpecific?: {
        isDealNowToBePressed?: boolean,
        isSeatToBeTaken?: boolean,
    };
    // session?: {
    //     operatorId: string,
    //     gameType: string,
    // };


    constructor(gameName_, betAmount_, gameChipset_, betspots_, isConfirmToBePressed_, phase_, bjSpecific_){//, session_) {
        this.game = gameName_;
        this.betAmount = betAmount_;
        this.chipset = gameChipset_;
        this.betspots = betspots_;
        this.isConfirmToBePressed = isConfirmToBePressed_;
        this.phase = phase_;
        this.bjSpecific = bjSpecific_;
        // this.session = session_;
    }

    // static async createNewBetDetailsObjectData(session: Data) {

    //     const gameName_ = session.game.name;
    //     const betAmount_ = Number(session.limit.minBet);    // the min limit value 
    //     const gameChipset_ = await ChipsetPo.getChips(session);  // get the chipset from limits or admin params by priority
    //     const betspots_ = BettingAreaPo.getOneMainBetspot(session.game.name);
    //     const isConfirmToBePressed_ = true;
    //     const phase_ = {
    //         timerPYB: PYB_MIN_TIMER,
    //         timeoutPYB: PYB_WAIT_TIMEOUT,
    //     };
    //     const bjSpecific_ = { isDealNowToBePressed: true, isSeatToBeTaken: true };
    //     // const session_ = { operatorId: session.operator.id, gameType: session.game.type }

    //     return new PlaceBetData(gameName_, betAmount_, gameChipset_, betspots_, isConfirmToBePressed_, phase_, bjSpecific_);// , session_);
    // }
}


