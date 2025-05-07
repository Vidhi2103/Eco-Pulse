
import { useState } from 'react';
import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap';

function LocateStore(){
    return (
        <div className="container">
            <iframe src="https://my.atlist.com/map/f1215868-0ed2-4317-8993-d908c6ffa075/?share=true"
             allow="geolocation 'self' https://my.atlist.com" 
             width="100%" height="400px" 
             loading="lazy" frameborder="0"
             scrolling="no"
             allowfullscreen id="atlist-embed">
            </iframe>
        </div>
    )
}
export default LocateStore;