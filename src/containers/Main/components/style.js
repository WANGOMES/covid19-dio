import styled from 'styled-components'
import { Typography, CardContent, TableContainer, Grid} from '../../../components'
import Box from '@material-ui/core/Box'

export const LabelStyled = styled(Typography)`
    font-weight: 500;
    font-size: 1.5rem;
`
export const ValueStyled = styled(Typography)`
    font-weight: 400;
    font-size: 2.5rem;
`
export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 25px;
`
export const CardContentStyled = styled(CardContent)`
    border-left: 8px solid ${({color}) => color || '#5d78ff'}
`

export const ItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    min-width:150px;
`
export const BoxStyled = styled(Box)`
    display: inline-block;
    justify-content: space-between;
    padding: 25px 0px 0px 0px;
    margin: 0px;
    width: 100%;
    heigth: 600px;
`
export const ChartBox = styled(Box)`
    display: inline-block;
    justify-content: space-between;
    padding: 20px;
    margin-top: 25px;
    width: 100%;
    heigth: 300px;
    background-color: ${'#FFFFFF'};
    border-radius: 5px;
    border: 1px solid #e5e4e2;
    border-left: 8px solid #9b870c;
`
