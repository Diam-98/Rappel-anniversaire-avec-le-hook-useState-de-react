import React from "react";

const List = ({people}) => {

    return (
        <>
            {
                people.map((person) => {
                    const {id, img, name, age} = person;
                    return (
                            <article key={id}>
                                <img src={img} alt={name} />
                                <div className='info'>
                                    <h4>{name}</h4>
                                    <p>{age} ans</p>
                                </div>
                            </article>
                    )
                })
            }
        </>
    );
};

export default List;