import { useAppTheme } from 'app/data'
import { DynamicButtonV2 } from '../../general'
import {Tooltip} from '../../general'
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronCircleUp, FaChevronDown, FaChevronUp, FaPlus, FaPlusCircle, FaSearch, FaTimes, FaTrash } from 'react-icons/fa'
import { FixedSizeList as List } from 'react-window'
import { CalendarIcon } from './CalendarIcon'
import { DropdownStyled, RowStyled, SearchDropdownInput, SelectedItemStyled } from './styles/Main'
import './styles/searchdropdown.css'



export const SearchDropdown = ({ 
	list = [], 
	data = '', 
	setData = () => {console.log('I need a Set data function!')}, 
	defaultValue, 
	allowmultiplepicklistselections 

}) => {

	const [themeState,] = useAppTheme()
	const [mode, setMode] = useState('default')
	// setNames(current => [...current, 'Carl']);
	const YYYY_MM_DD_HH_MM = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/

	const [showList, setShowList] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	// useEffect(()=>{
	// 	console.log('data',data)
	// },[data])
	const [isMatch, setIsMatch] = useState(themeState.currentTheme.dangerColor)
	function setValue(value) {
		if (data.length > 0 && allowmultiplepicklistselections) {

			if (!data.find((item) => item.id === value.id)) {
				setData([...data, { id: value.id, selected: 1 }]);

			} else {
				setData(data.filter((item) => item.id !== value.id));
			}
		} else {
			setData([{ id: value.id, selected: 1 }])
		}

		setSearchTerm('')
	}

	useEffect(() => {
		const isDate = (value) => YYYY_MM_DD_HH_MM.test(value.label)

		if (list.length > 0) {
			// console.log(list)
			if (list.every(isDate)) {
				setMode('date')
			} else {
				setMode('default')
			}
		}
	}, [list])

	const SelectedItem = ({ }) => {
		return <SelectedItemStyled>

		</SelectedItemStyled>
	}
	function getMode(item) {

		if (YYYY_MM_DD_HH_MM.test(item)) {
			return 'date'
		} else {
			return 'default'
		}
	}
	const Row = ({ index, style }) => (
		<RowStyled
			active={active == index ? true : false}
			key={index}
			// className={index == active ? 'ListItemSelected' : 'ListItem'}
			style={style}
			onMouseEnter={() => {
				setActive(index)
			}}
			onClick={() => {
				// setData(data.length > 0 ? data => [...data, showList[index]] : [showList[index]]);
				setValue(showList[index])
				// setData(showList[index])
				// setSearchTerm(showList[index].label)
				setShowList([])
			}}
		>
			{showList[index].label !== '' && showList[index].label}
			{showList[index].flag && ' - ' + showList[index].flag}
		</RowStyled>
	)

	const menuRef = useRef(null)
	//TODO make this a generic helper function
	function useOutsideAlerter(ref) {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event) {
				// setShowList([])

				if (ref.current && !ref.current.contains(event.target)) {
					// alert("You clicked outside of me!");

					if (showList.length > 0) {
						setShowList([])
					}


				}
			}
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}
	useOutsideAlerter(menuRef);

	// const [data, setData] = useState('')
	const [placeholder, setPlaceholder] = useState('Type to search')
	const [active, setActive] = useState(0)
	function searchList(searchTerm, searchList) {
		// console.log('searching...')

		const match = searchList.filter(element =>
			element.label.toLowerCase().includes(searchTerm.toLowerCase())
		)
		if (match.length > 0) {
			setIsMatch(themeState.currentTheme.successColor)

		} else {
			setIsMatch(
				themeState.currentTheme.dangerColor)

		}
		setShowList(match)
		if (match.length === 1) {
			// setData(match[0])
			// console.log(match[0])
			// setData(data.length > 0 ? data => [...data, match[0]] : [match[0]]);
			setValue(match[0])
			setSearchTerm(match[0].label)
			setIsMatch(themeState.currentTheme.successColor)
			setShowList([])
		} else {
			// setIsMatch(themeState.currentTheme.dangerColor)

			// setData([])
		}
	}

	const [noData, setNoData] = useState(false)
	useEffect(() => {
		if (list.length === 0) {
			setNoData(true)
		}
		// console.log('test?',defaultValue?true:false)
		if (defaultValue) {
			const defaultItem = list.filter((element) => { return element.id == defaultValue })
			if (defaultItem.length === 1) {
				// setData(defaultItem[0])
				// setData(data.length > 0 ? data => [...data, defaultItem[0]] : [defaultItem[0]]);
				setValue(defaultItem[0])
				setSearchTerm(defaultItem[0].label)
				setShowList([])
			}
		} else {
			setData([])
		}
	}, [])
	useEffect(() => {
		if (searchTerm != '') {
			searchList(searchTerm, list)
		}


	}, [searchTerm])
	useEffect(() => {
		if (showList.length > 0) {
			setActive(0)


		}
	}, [showList])

	return (
		<div
			style={{
				//	backgroundColor: 'white',
				color: 'black',
				display: 'flex', flexDirection: 'column',
				alignItems: 'center', justifyContent: 'center',
				width: '100%', position: 'relative'

				//	padding: 10,
				//	minWidth: 400,
			}}
		>

			<Tooltip content={noData ? 'There are no selectable options' : null} direction={'right'}>
				<div
					style={{ alignItems: 'center', justifyContent: 'center', width: '100%', display: 'flex', flexDirection: 'row' }}
				>

					<SearchDropdownInput
						type='text'
						disabled={noData}
						onFocus={() => {
							setShowList(list)
						}}

						placeholder={placeholder}
						onKeyDown={e => {

							if (e.key === 'ArrowDown') {
								if (showList.length <= 1 && searchTerm == '') {
									setShowList(list)
								}
								if (active < showList.length - 1) {
									setActive(active + 1)
								} else {
									setActive(0)
								}

								if (e.key === 'Enter') {
									setSearchTerm(showList[active])
									// setData(showList[active])
									// setData(data.length > 0 ? data => [...data, showList[active]] : [showList[active]]);
									setValue(showList[active])
									setShowList(showList[active])
								}
							}

							if (e.key === 'ArrowUp') {
								if (showList.length <= 1 && searchTerm == '') {
									setShowList(list)
								}
								if (active > 0) {
									setActive(active - 1)
								} else {
									setActive(showList.length - 1)
								}
							}

							if (e.key === 'Enter' && showList[active] !== undefined) {
								// setData(showList[active])
								// setData(data.length > 0 ? data => [...data, showList[active]] : [showList[active]]);
								setValue(showList[active])
								setSearchTerm(showList[active].label)
								setShowList(showList[active])
							}


							if (e.key === 'Backspace') {
								// if (isMatch === themeState.currentTheme.dangerColor) {
								setSearchTerm('')
								// !allowmultiplepicklistselections && setData([])

								// }
								//setData('')
								//  setShowList(list)

							}

						}}
						onChange={e => {
							setSearchTerm(e.target.value)
							if (showList.length == 0) {
								setShowList(list)
							}
						}}
						value={searchTerm}
						maxLength='60'
					// style={{
					// 	position: 'relative',
					// 	display: 'flex',
					// 	flexDirection: 'row',
					// 	alignItems: 'center',
					// 	justifyContent: 'space-between',
					// 	color: isMatch,
					// 	width: '95%',
					// 	padding: 15,
					// 	fontWeight: 'bold',
					// 	backgroundColor: themeState.currentTheme.bgb3 
					// }}
					/>
					{showList.length > 0 ? <DynamicButtonV2
						icon={<FaChevronUp />}
						onClick={() => {
							setShowList([])

						}}
						color={themeState.currentTheme.text}
						backgroundColor={themeState.currentTheme.bga1}
					// text={'Add'}
					/> :
						<DynamicButtonV2
							icon={<FaChevronDown />}
							onClick={() => {
								setShowList(list)

							}}
							color={themeState.currentTheme.text}
							backgroundColor={themeState.currentTheme.bga1}
						// text={'Add'}
						/>}
					{/* {data.length>0 && <DynamicButtonV2
						icon={<FaTrash />}
						color={themeState.currentTheme.text}
						backgroundColor={themeState.currentTheme.bga1}
					// text={'Add'}
					/>} */}
				</div>
				{data.length > 0 && <div>
					{data.map((item,index) => {
						return <SelectedItemStyled
						key={item?.id+index}
							onClick={() => {
								// console.log(data.filter((listItem) => listItem.id !== item.id))
								setData(data.filter((listItem) => listItem.id !== item.id));

							}}
						>
							<FaTimes style={{ marginRight: 5, }}

							/>
							{list.filter((listItem) => { return listItem.id === item.id })[0] && list.filter((listItem) => { return listItem.id === item.id })[0].label}</SelectedItemStyled>
					})}

				</div>}
			</Tooltip>
			{/* elementList  */}

			{showList.length > 0 && (
				<div
					ref={menuRef}

					style={{ width: '100%', top: 50, position: 'absolute' }}>
					<div style={{ fontSize: '.8rem', padding: 10, background: themeState.currentTheme.bga2,
					
					color: themeState.currentTheme.text }}>
						Click or Tap an item to select. {allowmultiplepicklistselections && "You may select multiple."}
					</div>
					{mode === 'default' && <DropdownStyled
						// className="List"

						height={showList.length * 25 > 200 ? 200 : showList.length * 25}
						itemCount={showList.length}
						itemSize={30}
					// width={500}
					>

						{Row}

					</DropdownStyled>}
					{mode === 'date' && <div style={{
						width: '100%',
						padding: 10,
						background: themeState.currentTheme.bga2,
						boxSizing: 'border-box',
						justifyContent: list.length <= 4 ? 'center' : 'flex-start',
						display: 'flex', flexDirection: 'row', borderRadius: '4px', overflow: 'scroll',
					}}>
						{list.map((item, index) => {
							return <CalendarIcon
							key={item?.id+index}

								onclick={() => {
									setValue(item)
									setShowList([])

								}}
								date={item.label} />
						})}
					</div>}
				</div>

			)}
		</div>
	)
}
// SearchDropdown.defaultProps = {
// 	list: [],
// 	data: '',
// 	setData: () => {
// 		console.log('I need a Set data function!')
// 	}
// }
