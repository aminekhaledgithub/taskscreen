import axios from "axios"
import { useDispatch } from "react-redux"
import { addRecette,getRecetteDetail } from "../../redux/actions"


const URL_UNSPLASH_PICS = "https://api.unsplash.com/search/photos";
const URL_UNSPLASH_PICS_ONE = "https://api.unsplash.com/photos";
const API_KEY = "8b2f82164ec64c6a8b29e18f04372dde"
const MAX_RESULT = 1


export const useFetchRecette = () => {
    const dispatch = useDispatch()
    const searchImages = async (term) => {
        const response = await axios.get(URL_UNSPLASH_PICS, {
            headers: {
                Authorization: 'Client-ID _aNL950pKxdSOFWGjRGkgloKj93F_Pjes5UHIHOVAv4'
            },
            params: {
                query: "recette",

            }
        });
        dispatch(addRecette(response.data.results))

    }
    
    const searchImagesDetail = async (id) => {

        const response = await axios.get(`${URL_UNSPLASH_PICS_ONE}/${id}`, {
            headers: {
                Authorization: 'Client-ID _aNL950pKxdSOFWGjRGkgloKj93F_Pjes5UHIHOVAv4'
            },

        });
        dispatch(getRecetteDetail(response.data))
    }
    
    const searchImagesDetailFetch = async (id) => {
        const response = await fetch(`${URL_UNSPLASH_PICS_ONE}/${id}`, {
            method: "GET",
            headers: {
                Authorization: 'Client-ID _aNL950pKxdSOFWGjRGkgloKj93F_Pjes5UHIHOVAv4'
            },

        }).then(response=> response.json()).then(data => { 
            console.log("fffffffffff",data)
            dispatch(getRecetteDetail(data))
        }).catch(err => console.log("errorddd", err))
    }



    return {
        searchImages, searchImagesDetail,searchImagesDetailFetch
    }
}