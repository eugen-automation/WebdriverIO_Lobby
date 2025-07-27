import { DTLocators } from '../../../../selectors/games/specificComponents.sel';


export class Roadmap {

    get roadmap() {
        return {
            map: $(DTLocators.roadMap),
            allItems: $$(DTLocators.roadMapItems),
            firstItem: $(DTLocators.roadmapFirstItem),
            firstItemColor: $(DTLocators.roadmapFirstItemColor)
        }
    };

   

}

