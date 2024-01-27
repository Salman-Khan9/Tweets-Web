module.exports = (sequelize , DataTypes)=>{
    const tweet = sequelize.define("tweet", {
     title :{
         type: DataTypes.STRING,
         allowNull : false
     },
     description :{
         type: DataTypes.STRING,
         allowNull : false
     }, username :{
         type: DataTypes.STRING,
         allowNull : false
     }
    })
    return tweet
 }