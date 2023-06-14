import React from "react";
import { useOutletContext } from "react-router-dom";

const VansTabDetail = () => {
    const [van] = useOutletContext();

    return (
        <>
        {
            van && (
                <div>
                    <p><strong>Name:</strong> {van.name}</p>
                    <p><strong>Category:</strong> {van.type}</p>
                    <p>
                        <strong>Description:</strong>
                        {van.description}
                    </p>
                    <p>
                        <strong>Visibility: </strong>
                        Public
                    </p>
                </div>
            )
        }
        </>   
    )
}

export default VansTabDetail;