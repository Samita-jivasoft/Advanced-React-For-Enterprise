import React from 'react'
import Select from './Select'
import { render, fireEvent } from '@testing-library/react'

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

test('test that renders all options that are passed to it', () => {
    const { getAllByRole, getByTestId } = render(<Select options={options} />)
    fireEvent.click(getByTestId('DseSelectButton'))
    expect(getAllByRole('menuitemradio')).toHaveLength(options.length)
})

test('test that renders options using custom renderOption method if passed as prop', () => {
    const { getAllByTestId, getByTestId } = render(<Select options={options} renderOption={({ option, getOptionRecommendedProps }) => {
        return <li data-testid='CustomRenderOption' {...getOptionRecommendedProps()}>{option.label}</li>
    }} />)
    fireEvent.click(getByTestId('DseSelectButton'))
    expect(getAllByTestId('CustomRenderOption')).toHaveLength(options.length)
})

test('test that calls the onOptionSelected prop with the selected option and index, if passed', () => {
    const onOptionSelected = jest.fn()
    const { getAllByRole, getByTestId } = render(<Select options={options} onOptionSelected={onOptionSelected} />)
    fireEvent.click(getByTestId('DseSelectButton'))
    fireEvent.click(getAllByRole('menuitemradio')[0])
    expect(onOptionSelected).toHaveBeenCalledWith(options[0], 0)
})

test('test for the button label changes to the selected option label', () => {
    const { getAllByRole, getByTestId } = render(<Select options={options} />)
    fireEvent.click(getByTestId('DseSelectButton'))
    fireEvent.click(getAllByRole('menuitemradio')[0])
    expect(getByTestId('DseSelectButton')).toHaveTextContent(options[0].label)
})

//Snapshot Testing
test('snapshot test of the selected option state', () => {
    const { getAllByRole, getByTestId, asFragment } = render(<Select options={options} />)
    fireEvent.click(getByTestId('DseSelectButton'))
    fireEvent.click(getAllByRole('menuitemradio')[0])
    expect(asFragment()).toMatchSnapshot()
})

test('snapshot test of base state', () => {
    const { asFragment } = render(<Select options={options} />)
    expect(asFragment()).toMatchSnapshot()
})

test('snapshot test of the options menu open state', () => {
    const { getByTestId, asFragment } = render(<Select options={options} />)
    fireEvent.click(getByTestId('DseSelectButton'))
    console.log("asFragment()",asFragment())
    console.log("testid",getByTestId)
    expect(asFragment()).toMatchSnapshot()
})

test('test for custom select label', () => {
    const { getByText } = render(<Select options={options} label='CUSTOM LABEL' />)
    expect(getByText(/CUSTOM LABEL/)).toBeInTheDocument()
})