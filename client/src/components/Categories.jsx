import React from 'react'
import CategoryItem from './CategoryItem'
import { categories } from '../data/data'
import styled from 'styled-components'
import {mobile} from "../responsive"
import {xr} from "../responsive"
import {window} from "../responsive"
const Container = styled.div`
    background-color: #f0f8ff;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: space-between;
    ${mobile({
     flexDirection:"column",
    })}
      ${xr({
     flexDirection:"column",
    })}
        ${window({
     flexDirection:"column",
    })}
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}

    </Container>
  )
}

export default Categories