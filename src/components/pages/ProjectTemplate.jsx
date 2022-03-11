import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProjectTemplate() {
    const params = useParams();
    console.log(params)
    return <div></div>;
}
