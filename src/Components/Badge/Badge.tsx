import { useState } from 'react';
import Style from './Badge.module.css';
import { BadgeList } from './BadgeList';

interface BadgeProps {id:string, type?:string}
const Badge = ({id, type}:BadgeProps) => {
    const arr:{id:string, name:string, description:string} | undefined = BadgeList.find(item => item.id === id);
    return (
        <div className={`${Style.badge} ${Style[`badge-`+arr?.name.split(" ").join("-")]} ${Style[type || ""]}`}>
            <div className={Style.tooltip}>
                <div className={Style.tooltipTitle}>{arr?.name}</div>
                <div className={Style.tooltipDescription}>{arr?.description}</div>
            </div>
        </div>
    );
}
export default Badge;