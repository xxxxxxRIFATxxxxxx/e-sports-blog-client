import React from 'react';
import "./Div_2_main.css";
import Small_top_post from './Small_top_post';
import Top_posts from './Top_posts';

const Div_2_main = () => {
    return (
        <>
        <div className="section">
            <div className="container">
                
                <Top_posts />
                <Small_top_post />
                
            </div>
        </div>
        
        </>
    );
};

export default Div_2_main;