import React, {useState} from 'react';
import {UnRating} from "./UnRating";
import {ratingValueType} from "../Rating/Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Uncontrolled Rating stories',
    component: UnRating,
}

const callback = action('change mode')

export const EmptyRating = () => <UnRating defaultValue={0} onChange={callback}/>
export const Rating2 = () => <UnRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UnRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UnRating defaultValue={5} onChange={callback}/>





