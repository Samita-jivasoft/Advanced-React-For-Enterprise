import { Element } from 'components'

export const TestingRoutesSet = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Routes</h1>
      <Element
        element={{
          label: 'No route, defaultvalue',
          defaultvalue: 'Go to page!'
        }}
      />
      <Element
        element={{
          label: 'Route, defaultvalue',
          defaultvalue: 'Go to page!',
          route: '/auth/login'
        }}
      />
      <Element
        element={{
          // datatype:'datelist',
          label: 'Only route',
          // defaultvalue: 'Go to page!',
          route: '/auth/login'
        }}
      />
      <Element
        element={{
          label: 'No route, Datatype: string, defaultvalue',
          datatype: 'string',
          defaultvalue: 'Go to page!'
        }}
      />
      <Element
        element={{
          label: 'Route, Datatype: string, defaultvalue',
          datatype: 'string',
          defaultvalue: 'Go to page!',
          route: '/auth/login'
        }}
      />
      <Element
        element={{
          label: 'Route, Datatype: string, no defaultvalue',
          datatype: 'string',
          // defaultvalue: 'Go to page!',
          route: '/auth/login'
        }}
      />
      <Element
        element={{
          label: 'No route, Masktype: string, defaultvalue',
          masktype: 'string',
          defaultvalue: 'Go to page!'
        }}
      />
      <Element
        element={{
          label: 'Route, Masktype: string, defaultvalue',
          masktype: 'string',
          defaultvalue: 'Go to page!',
          route: '/auth/login'
        }}
      />
      <Element
        element={{
          label: 'Route, Masktype: string, no defaultvalue',
          masktype: 'string',
          // defaultvalue: 'Go to page!',
          route: '/auth/login'
        }}
      />
      <Element
        element={{
          datatype: 'datelist',
          label: 'No route, Datatype: datelist',
          canedit: 1
          // defaultvalue: 'Go to page!'
        }}
      />
      <Element
        element={{
          datatype: 'datelist',
          label: 'route, Datatype: datelist',
          canedit: 1,
          route: '/auth/login'
          // defaultvalue: 'Go to page!'
        }}
      />
      <Element
        element={{
          // datatype:'datelist',
          label: 'Route',
          // defaultvalue: 'Go to page!',
          route: '/sdkfk/sdf/sdf'
        }}
      />
    </div>
  )
}
