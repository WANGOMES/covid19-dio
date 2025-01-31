import React, {memo} from 'react'
import { PropTypes } from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'


function Board({ data }){
    const { cases, todayDeaths, recovered, deaths, todayCases, totalTests } = data

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} heigth={60} />

    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#000" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label="Casos hoje" color="#E95078" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Total de óbitos" color="#483d8b" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de casos" color="#F7B829" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Card value={getValue(totalTests)} label="Total de testes" color="#5d78ff" />
            </Grid>
        </Grid>
        
    )
}
export default memo(Board)