const ErrorMessage=({children})=>{
    return(
        <div
            style={{
                width:'100%',
                padding:10,
                marginBotttom:10,
                borderRadius:4,
                backgroundColor:'oranged',
                textAlign:'center',
                color:'orange',
                textTransform:'capitalize',
            }}
        >
            {children}

        </div>
    )
}

export default ErrorMessage;