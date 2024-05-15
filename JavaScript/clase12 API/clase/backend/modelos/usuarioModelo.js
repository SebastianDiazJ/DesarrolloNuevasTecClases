import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            require:true
        },
        clave:{
            type:String,
            require:true
    }
},

{
    // poner datos de tiempo y mas 
timestamps:true

}
)
export const Usuario =mongoose.model('Usuario',UserSchema);