module.exports = (sequelize, DataTypes) => {
    var Inventory = sequelize.define("Inventory", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    },{
		tableName: "inventories",
        timestamps: true
	});

    Inventory.associate = models => {
        Inventory.belongsTo(models.User);
        Inventory.belongsTo(models.Item);
	 };
    
    return Inventory;
};