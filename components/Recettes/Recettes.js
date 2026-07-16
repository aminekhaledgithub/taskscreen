import React, { useEffect } from 'react'
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import RecetteTile from "./RecetteTile";
import { useFetchRecette } from "./useFetchRecette";

export default function Recettes() {

  const {searchImages } = useFetchRecette();
  const recettes = useSelector(state => state.recetteList.list)

  const renderItem = ({ item }) => {
    return (<RecetteTile recette={item} />)
  }

  useEffect(() => {
    searchImages()
  }, [])


  return (
      <>

        <FlatList
          data={recettes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          scrollEnabled={true}
        />
      </>
  )
}
