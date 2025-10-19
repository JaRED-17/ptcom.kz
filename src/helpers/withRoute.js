import React from 'react'
import { useNavigate } from 'react-router-dom'

const withRoute = (Wrapper) => {
  const ComponentWithRoute = (props) => {
    const navigate = useNavigate()

    return <Wrapper {...props} navigate={navigate} />
  }

  const wrapperName = Wrapper.displayName || Wrapper.name || 'Component'
  ComponentWithRoute.displayName = `withRoute(${wrapperName})`

  return ComponentWithRoute
}

export default withRoute