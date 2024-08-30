import { Element } from 'components'

export const TestingLinksSet = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Links</h1>
      <Element
        element={{
          label: 'No link, defaultvalue',
          defaultvalue: 'Go to google!'
        }}
      />
      <Element
        element={{
          label: 'Link, defaultvalue',
          defaultvalue: 'Go to google!',
          link: 'https://stackoverflow.com/questions/796087/make-a-div-into-a-link'
        }}
      />
      <Element
        element={{
          // datatype:'datelist',
          label: 'Only link',
          // defaultvalue: 'Go to google!',
          link: 'https://stackoverflow.com/questions/796087/make-a-div-into-a-link'
        }}
      />
      <Element
        element={{
          label: 'No link, Datatype: string, defaultvalue',
          datatype: 'string',
          defaultvalue: 'Go to google!'
        }}
      />
      <Element
        element={{
          label: 'Link, Datatype: string, defaultvalue',
          datatype: 'string',
          defaultvalue: 'Go to google!',
          link: 'https://stackoverflow.com/questions/796087/make-a-div-into-a-link'
        }}
      />
      <Element
        element={{
          label: 'Link, Datatype: string, no defaultvalue',
          datatype: 'string',
          // defaultvalue: 'Go to google!',
          link: 'https://stackoverflow.com/questions/796087/make-a-div-into-a-link'
        }}
      />
      <Element
        element={{
          label: 'No link, Masktype: string, defaultvalue',
          masktype: 'string',
          defaultvalue: 'Go to google!'
        }}
      />
      <Element
        element={{
          label: 'Link, Masktype: string, defaultvalue',
          masktype: 'string',
          defaultvalue: 'Go to google!',
          link: 'https://stackoverflow.com/questions/796087/make-a-div-into-a-link'
        }}
      />
      <Element
        element={{
          label: 'Link, Masktype: string, no defaultvalue',
          masktype: 'string',
          // defaultvalue: 'Go to google!',
          link: 'https://stackoverflow.com/questions/796087/make-a-div-into-a-link'
        }}
      />
      <Element
        element={{
          datatype: 'datelist',
          label: 'No link, Datatype: datelist',
          canedit: 1
          // defaultvalue: 'Go to google!'
        }}
      />
      <Element
        element={{
          datatype: 'datelist',
          label: 'link, Datatype: datelist',
          canedit: 1,
          link: 'https://stackoverflow.com/questions/796087/make-a-div-into-a-link'
          // defaultvalue: 'Go to google!'
        }}
      />
    </div>
  )
}
