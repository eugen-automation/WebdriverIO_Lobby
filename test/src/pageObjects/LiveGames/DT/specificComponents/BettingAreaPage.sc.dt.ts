import { DTLocators } from '../../../../selectors/games/specificComponents.sel';


export class BettingArea {

    get bettingArea() {
        return {
            dragon: {
                get betspot() { return $(DTLocators.dragon) },
                get chip() { return $(DTLocators.dragonChip) },
                get totalChips() { return $(DTLocators.dragonTotalChips) },
                get text() { return $(DTLocators.dragonText) },
                get backgroundColor() { return $(DTLocators.dragonBackgroundColor) },
                get virtualCard() { return $(DTLocators.dragonVirtualCard) },
                get icon() { return $(DTLocators.dragonIcon) },
            },

            tiger: {
                get betspot() { return $(DTLocators.tiger) },
                get chip() { return $(DTLocators.tigerChip) },
                get totalChips() { return $(DTLocators.tigerTotalChips) },
                get text() { return $(DTLocators.tigerText) },
                get backgroundColor() { return $(DTLocators.tigerBackgroundColor) },
                get virtualCard() { return $(DTLocators.tigerVirtualCard) },
                get icon() { return $(DTLocators.tigerIcon) },
            },

            tie: {
                get betspot() { return $(DTLocators.tie) },
                get chip() { return $(DTLocators.tieChip) },
                get totalChips() { return $(DTLocators.tieTotalChips) },
                get text() { return $(DTLocators.tieText) },
                get backgroundColor() { return $(DTLocators.tieBackgroundColor) },
                get icon() { return $(DTLocators.tieIcon) }
            },


            dragonBig: {
                get betspot() { return $(DTLocators.dragonBig) },
                get chip() { return $(DTLocators.dragonBigChip) },
            },

            dragonSmall: {
                betspot: $(DTLocators.dragonSmall),
                chip: $(DTLocators.dragonSmallChip),
            },

            dragonDiamonds: {
                betspot: $(DTLocators.dragonDiamonds),
                chip: $(DTLocators.dragonDiamondsChip),
            },

            dragonHearts: {
                betspot: $(DTLocators.dragonHearts),
                chip: $(DTLocators.dragonHeartsChip),
            },

            dragonClubs: {
                betspot: $(DTLocators.dragonClubs),
                chip: $(DTLocators.dragonClubsChip),
            },

            dragonSpades: {
                betspot: $(DTLocators.dragonSpades),
                chip: $(DTLocators.dragonSpadesChip),
            },

            tigerBig: {
                betspot: $(DTLocators.tigerBig),
                tigerBigBetspotChip: $(DTLocators.tigerBigChip),
            },

            tigerSmall: {
                betspot: $(DTLocators.tigerSmall),
                tigerSmallBetspotChip: $(DTLocators.tigerSmallChip),
            },
            tigerDiamonds: {
                betspot: $(DTLocators.tigerDiamonds),
                chip: $(DTLocators.tigerDiamondsChip),
            },
            tigerHearts: {
                betspot: $(DTLocators.tigerHearts),
                chip: $(DTLocators.tigerHeartsChip),
            },
            tigerClubs: {
                betspot: $(DTLocators.tigerClubs),
                chip: $(DTLocators.tigerClubsChip),
            },
            tigerSpades: {
                betspot: $(DTLocators.tigerSpades),
                chip: $(DTLocators.tigerSpadesChip),
            },




            dragonTigerDiamondIcons: $$(DTLocators.diamondIcons),
            dragonTigerHeartsIcons: $$(DTLocators.heartsIcons),
            dragonTigerClubsIcons: $$(DTLocators.clubsIcons),
            dragonTigerSpadesIcons: $$(DTLocators.spadesIcons)
        }
    }

    get roadmap() {
        return {
            map: $(DTLocators.roadMap),
            allItems: $$(DTLocators.roadMapItems),
            firstItem: $(DTLocators.roadmapFirstItem),
            firstItemColor: $(DTLocators.roadmapFirstItemColor)
        }
    };

    get predictionRoad() {
        return $(DTLocators.predictionRoad)
    };

    // get headerResultReadyColor() {
    //     return {
    //         tigerWin: $(DTLocators.tigerWinBackgroundColor),
    //         dragonWin: $(DTLocators.dragonWinBackgroundColor),
    //         tieWin: $(DTLocators.tieWinBackgroundColor),
    //     }
    // }

}

