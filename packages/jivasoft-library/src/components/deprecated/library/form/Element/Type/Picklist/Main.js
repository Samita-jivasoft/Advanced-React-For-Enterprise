import { useAppTheme } from 'app/data'
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronCircleUp, FaChevronDown, FaChevronUp, FaPlus, FaPlusCircle, FaSearch, FaTimes, FaTrash } from 'react-icons/fa'
import { DropdownStyled, RowStyled, PickerElementInput, SelectedItemStyled, DropdownButtonStyled, SearchContainerStyled, SearchContainerHeaderStyled, DropDownItemsStyled } from './styles'
import './PickerElement.css'
import { CalendarIcon } from '../CalendarIcon'
import { DynamicButtonV2, Tooltip } from '../../../../general'
import { useElement } from '../../data/ElementContext'

export const ElementTypePicklist = () => {
	const [themeState,] = useAppTheme()
	const [elementState, elementDispatch] = useElement()
	const { label, selectoptions = [], value, defaultvalue, allowmultiplepicklistselections, validmaximum, remainingRequirements } = elementState;
	const ItemsRef = useRef(null);

	const [mode, setMode] = useState('default')
	// setNames(current => [...current, 'Carl']);
	const YYYY_MM_DD_HH_MM = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/

	const [showList, setShowList] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	const [isMatch, setIsMatch] = useState(themeState.currentTheme.dangerColor)
	useEffect(() => {
		// console.log('value:', value)
	}, [value])
	function setValue(itemvalue) {
		if (itemvalue.length >= 1) {
			console.log("Hello2?")

			var dataObj = []
			for (var i = 0; i < itemvalue.length; i++) {
				dataObj.push({ id: itemvalue[i].id, selected: 1 })
			}

			elementDispatch({ type: 'SET_VALUE', value: dataObj })

		}
		else {
			if (value.length > 0 && allowmultiplepicklistselections === 1) {
				if (!value.find((item) => item.id === itemvalue.id)) {

					elementDispatch({ type: 'SET_VALUE', value: [...value, { id: itemvalue.id, selected: 1 }] })

				} else {

					elementDispatch({ type: 'SET_VALUE', value: value.filter((item) => item.id !== itemvalue.id) })

				}
			} else {
				elementDispatch({ type: 'SET_VALUE', value: [{ id: itemvalue.id, selected: 1 }] })

			}

		}
		// setSearchTerm('')
	}


	useEffect(() => {
		const isDate = (value) => YYYY_MM_DD_HH_MM.test(value.label)

		if (selectoptions.length > 0) {
			// console.log(selectoptions)
			if (selectoptions.every(isDate)) {
				setMode('date')
			} else {
				setMode('default')
			}
		}
	}, [selectoptions])
	useEffect(() => {
		const component = ItemsRef.current;

		const handleScroll = () => {
			const componentRect = component.getBoundingClientRect();
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

			const componentTop = componentRect.top + scrollTop;
			const componentBottom = componentTop + componentRect.height;

			if (componentTop < scrollTop || componentBottom > scrollTop + windowHeight) {
				const scrollOptions = {
					top: 10000,
					behavior: 'smooth',
				};
				window.scrollTo(scrollOptions);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const SelectedItems = ({ }) => {


		return <>
			{noData ? 'There are no options to select' : value.map((item, index) => {
				return <SelectedItemStyled
					key={item?.id + index}
					onClick={(e) => {
						e.stopPropagation()

						// console.log(data.filter((listItem) => listItem.id !== item.id))
						// setData();
						elementDispatch({ type: 'SET_VALUE', value: value.filter((listItem) => listItem.id !== item.id) })

					}}
				>
					<FaTimes style={{ marginRight: 5, }}

					/>
					{selectoptions?.filter((listItem) => { return listItem?.id === item?.id })[0]?.label}
				</SelectedItemStyled>
			})}
		</>
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
			// setValue(match[0])
			// setSearchTerm(match[0].label)
			// setIsMatch(themeState.currentTheme.successColor)
			// setShowList([])
		} else {
			// setIsMatch(themeState.currentTheme.dangerColor)

			// setData([])
			// elementDispatch({ type: 'SET_VALUE', value: [] })

		}
	}

	const [noData, setNoData] = useState(false)

	useEffect(()=>{
		if(noData){
			elementDispatch({type:'RESET_REQUIREMENTS'})

		}
	},[noData])
	//If there are defaultvalues, set them in the formelement
	useEffect(() => {
		if (selectoptions.length === 0) {
			setNoData(true)
		}
		// console.log('test?',defaultvalue?true:false)
		if (selectoptions?.length > 0) {
			if (defaultvalue) {
				let newdefaultvalues = defaultvalue.split('|')
				if (newdefaultvalues.length === 1) {
					const defaultItem = selectoptions.filter((element) => { return element.id == defaultvalue })
					// setData(defaultItem[0])
					// setData(data.length > 0 ? data => [...data, defaultItem[0]] : [defaultItem[0]]);
					// console.log(defaultItem[0])
					setValue(defaultItem)
					// setShowList([])
				}
				else {
					var dataValArray = []
					for (var i = 0; i < newdefaultvalues.length; i++) {
						if (selectoptions.some(ele => ele.id === newdefaultvalues[i])) {
							dataValArray.push(selectoptions.find(ele => ele.id === newdefaultvalues[i]))
						}
					}

					if (allowmultiplepicklistselections) {
						setValue(dataValArray)
					}
					else if (!allowmultiplepicklistselections) {
						setValue(dataValArray[0])
					}
				}
			} else {
				elementDispatch({ type: 'SET_VALUE', value: [] })

			}
		}

	}, [])

	useEffect(() => {
		if (searchTerm != '') {
			searchList(searchTerm, selectoptions)
		}

	}, [searchTerm])

	useEffect(() => {
		if (showList.length > 0) {
			setActive(0)


		}
	}, [showList])

	return (
		<SearchContainerStyled
			value={value}
			remainingRequirements={remainingRequirements}
			expanded={showList.length === 0 ? false : true}
		>
			{showList.length === 0 && <DropdownButtonStyled
				value={value}

				onClick={(e) => {
					e.stopPropagation()
					setShowList(selectoptions)

				}}
			>

				{value.length > 0 ? <DropDownItemsStyled

				>
					<SelectedItems />

				</DropDownItemsStyled> : 'Select a ' + label}



				{selectoptions?.length > 0 && <FaChevronDown style={{ marginLeft: 5 }} />}
			</DropdownButtonStyled>}
			{showList.length > 0 && <SearchContainerHeaderStyled>
				<PickerElementInput
					type='text'
					disabled={noData}
					onFocus={() => {
						setShowList(selectoptions)
					}}

					placeholder={'Type to Search'}
					onKeyDown={e => {

						if (e.key === 'ArrowDown') {
							if (showList.length <= 1 && searchTerm == '') {
								setShowList(selectoptions)
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
								setShowList([])
							}
						}

						if (e.key === 'ArrowUp') {
							if (showList.length <= 1 && searchTerm == '') {
								setShowList(selectoptions)
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
							console.log('called here')
							setValue(showList[active])
							setSearchTerm(showList[active].label)
							setShowList(showList[active])
						}


						if (e.key === 'Backspace') {
							// if (isMatch === themeState.currentTheme.dangerColor) {
							// setSearchTerm('')
							// !allowmultiplepicklistselections && setData([])

							// }
							//setData('')
							//  setShowList(selectoptions)

						}

					}}
					onChange={e => {
						setSearchTerm(e.target.value)
						if (showList.length == 0) {
							setShowList(selectoptions)
						}
					}}
					value={searchTerm}
					maxLength='60'

				/>
				<DynamicButtonV2
					icon={<FaChevronUp />}
					onClick={() => {
						setShowList([])

					}}
					color={themeState.currentTheme.text}
				// text={'Add'}
				/>

			</SearchContainerHeaderStyled>}

			{showList.length > 0 && (
				<div
					ref={menuRef}

					style={{ width: '100%', position: 'relative', zIndex: 500, background: themeState.currentTheme.bga3, boxSizing: 'border-box' }}>


					{value.length > 0 && <DropDownItemsStyled

					>
						<SelectedItems />

					</DropDownItemsStyled>}
					{mode === 'default' && <DropdownStyled
						// className="List"
						ref={ItemsRef}

						height={((showList.length * 25 > 200) || (showList.length * 25 < 100)) ? 100 : showList.length * 25}
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
						justifyContent: selectoptions.length <= 4 ? 'center' : 'flex-start',
						display: 'flex', flexDirection: 'row', borderRadius: '4px', overflow: 'scroll',
					}}>
						{selectoptions.map((item, index) => {
							return <CalendarIcon
								key={item?.id + index}

								onclick={() => {
									setValue(item)
									setShowList([])

								}}
								date={item.label} />
						})}
					</div>}
				</div>

			)}

		</SearchContainerStyled>
	)

}
// ElementTypePicklist.defaultProps = {
// 	selectoptions: [],
// 	data: '',
// 	validmaximum: 100,
// 	validMinimum: 0,
// 	setData: () => {
// 		console.log('I need a Set data function!')
// 	}
// }
