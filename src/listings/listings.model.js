import { DataTypes} from "sequelize";

import db from "../db.js";

const ListingModel = db.define('Listing',
{
    date:{type:DataTypes.DATEONLY,unique:true},
    petsNumber:{type:DataTypes.INTEGER},
    estate:{type:DataTypes.BOOLEAN}

});
export default ListingModel;
