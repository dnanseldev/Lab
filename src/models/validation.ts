export const isValidDescription = (p_desc: string ): boolean | null => {
    const re = /^\w{3,}$/g
    
    if ( !re.exec( p_desc ) )
      return null
    
    return true
}


