import React from 'react';
import './Goods.css';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            goods : [
                {
                    image : "#",
                    name : "goods1",
                    desc : "desc1",
                    path : "#"
                },
                {
                    image : "#",
                    name : "goods2",
                    desc : "desc2",
                    path : "#"

                },
                {
                    image : "#",
                    name : "goods3",
                    desc : "desc3",
                    path : "#"

                },
                {
                    image : "#",
                    name : "goods4",
                    desc : "desc4",
                    path : "#"

                },
                {
                    image : "#",
                    name : "goods5",
                    desc : "desc5",
                    path : "#"

                },
                
            ]
        }
        console.log(this.state.goods)
    }
    render() {
        return (
            

            <section className="section sectiom--goods">
                <h2 className="goods__name" >All goods</h2>
                <div>
                {
                    this.state.goods.map( elem => (
                        <div className="goods__cart" key={elem.name}> 
                            <h3>{elem.name}</h3>
                            <div className="goods__image">
                                <img src={elem.image} alt="goods image"/>
                            </div>
                            <p>{elem.desc}</p>
                            <div className="btn btn--view-goods">
                                <a href={elem.path} >View</a>
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
        );
    }
}

export default Main;
