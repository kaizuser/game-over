import axios from 'axios';
import Swal from "sweetalert2";

const gamesActions = {
    
    fetchGames: () =>{
       return async(dispatch, getState) => {

		const res = await axios.get('http://localhost:4000/api/games')

		dispatch({type:'fetchGames', payload:res.data.response})

       }
    },

    fetchGame: (id) =>{
        return async(dispatch, getState) => {
 
         const res = await axios.get('http://localhost:4000/api/games/' + id)

         dispatch({type:'fetchOne', payload:res.data.response})
 
        }
     },

    deleteGame: (id) => {

        return async(dispatch, getState) => {

                const res = await axios.delete('http://localhost:4000/api/games/' + id)
        }
    },

    filterGames: (games, value, genre)=>{
        return async(dispatch,getState)=>{
		dispatch({type:'filterGames', payload:{games, value, genre}})

        }
    },

    setGame: (gameName, genre, src, size, workson, company, description, requirements, price, images)=>{
        return async(dispatch, getState)=>{

		const res = await axios.post('http://localhost:4000/api/games',{gameName, genre, src, size, workson, company, description, requirements, price, images})

        }
    },

    modifyGame: (game) => {
	return async(dispatch, getState) => {

		const res = await axios.put('http://localhost:4000/api/games', {game})

	    }
    },

    addToShop: (game) => {
	    return async(dispatch, getState) => {
		    dispatch({type:'addToShop', payload:{game}})
	    }
    },

    uploadGames: (newGame) => {

        const token = localStorage.getItem('token')

        return async (dispatch, getState) =>{
            try{
                const res = await axios({
                    method: "post",
                    url: "http://localhost:4000/api/games/upload",
                    data: newGame,
                    headers: { "Content-Type": "multipart/form-data" , "Authorization": `Bearer ${token}`},
                }) 
                
                if (res.data.success){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "center-end",
                        showConfirmButton: false,
                        timer: 3000,
                        background: "#FFF",
                        iconColor: "rgb(86, 216, 151)",
                        confirmButtonColor: "rgb(221, 46, 113)",
                        timerProgressBar: true,
                
                        didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                        },
                    });
                
                    Toast.fire({
                        icon: "success",
                        title: res.data.message,
                    });
                }else{
    
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "center-end",
                        showConfirmButton: false,
                        timer: 3000,
                        background: "#FFF",
                        iconColor: "rgb(238, 76, 103)",
                        confirmButtonColor: "rgb(221, 46, 113)",
                        timerProgressBar: true,
                
                        didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                        },
                    });
                
                    Toast.fire({
                        icon: "error",
                        title: res.data.message,
                    });
                }

                return res
    

            }catch(err){
                console.log(err)

                const Toast = Swal.mixin({
                    toast: true,
                    position: "center-end",
                    showConfirmButton: false,
                    timer: 3000,
                    background: "#FFF",
                    iconColor: "rgb(238, 76, 103)",
                    confirmButtonColor: "rgb(221, 46, 113)",
                    timerProgressBar: true,
            
                    didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });
            
                Toast.fire({
                    icon: "error",
                    title: 'Try again later',
                });
            
            }
            
            

        }
    }


}

export default gamesActions;
