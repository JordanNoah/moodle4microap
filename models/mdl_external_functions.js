module.exports = (db,DataTypes) => {
    const mdl_external_functions = db.define('mdl_external_functions',{
        id:{type: DataTypes.INTEGER, primaryKey:true, allowNull:false, autoIncrement:true},
        name:{type:DataTypes.STRING(200), allowNull:false},
        classname:{type:DataTypes.STRING(100), allowNull:false},
        methodname:{type:DataTypes.STRING(100), allowNull:false},
        classpath:{type:DataTypes.STRING(255), allowNull:true},
        component:{type:DataTypes.STRING(100), allowNull:false},
        capabilities:{type:DataTypes.STRING(255), allowNull:true},
        services:{type:DataTypes.STRING(1333), allowNull:true},
    },{
        timestamps: false
    });
    return mdl_external_functions;
}