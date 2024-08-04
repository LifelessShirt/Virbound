import { useState } from 'react';
import Style from './Badge.module.css';
import { BadgeList } from './BadgeList';

interface BadgeProps {id:string, type?:string}
const Badge = ({id, type}:BadgeProps) => {
    const arr:{id:string, name:string, description:string} | undefined = BadgeList.find(item => item.id === id);
    return (
        <div className={`${Style.badge} ${Style[`badge-`+arr?.name]} ${Style[type || ""]}`}></div>
    );
}
export default Badge;