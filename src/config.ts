import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "RWA Marketplace",
    chainId: "galileo-4",
    createdDate: "2025-01-03T00:00:12.273Z",
    modifiedDate: "2025-01-03T00:00:12.273Z",
    id: "andromeda",
    collections: [
        {
            "cw721": "andr1ygkeprc5xz4wut046ugdapyae247sv98xx89pejfjadymmq3g4gsm5m8h7",
            "marketplace": "andr1z4mu7huna3p6d3zm5m7q7utuln68cangpc3x0qdn4je6eunmt5qqgplzfh",
            "name": "India RWA Collection",
            type: ICollectionType.MARKETPLACE,
            id: "marketplace",
        }
    ],
};

export default CONFIG;
