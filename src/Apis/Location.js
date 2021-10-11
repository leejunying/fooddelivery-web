import axios from 'axios'


var host="http://localhost:4000"

export const Load_Location =()=>{


   return  axios.get(`${host}/location/get`)
  

}

export const Add_Location=(adddata)=>{


    return axios.patch(`${host}/location/add`,adddata)

}


export const Delete_Location=(deletedata)=>{


    return axios.patch(`${host}/location/delete`,deletedata)

}

export const Update_Location=(selectdata,updatedata)=>{

    let obj={


        data:selectdata,
        update:updatedata

    }

    return axios.patch(`${host}/location/update`,obj)

}

