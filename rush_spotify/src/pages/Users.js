import React from "react";

function Users() {
    var name = 'tofgdgdto';
    var name_array = [
        'tommy',
        'toti',
        'test',
        'obrigada'
    ];

    return (
        <div>
            <h2>User : {name}</h2>
            <ul>
                <li>{name_array[0]}</li>
                <li>{name_array[1]}</li>
                <li>{name_array[2]}</li>
            </ul>

            {name_array.map(name => (
                <li key={name}>{name}</li>
            ))}
        </div>


    );

}

export default Users;
