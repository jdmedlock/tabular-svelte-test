<script>
	import Tabular from 'tabular-svelte'
	import { PersonData } from '../assets/testdata.js'
	
	// Called by the Tabular component to retrieve a specific page of data
	// Sort options = {order: 'ASC'|'DESC', dataName: 'attribute-name'}
	const getPersonData = ((startingRow, noRowsToGet, sortOptions) => {
		const getRows = (dataArray) => 
			noRowsToGet > 0 ? dataArray.slice(startingRow, startingRow+noRowsToGet) : dataArray.slice(startingRow)

		const propAscComparator = (columnName) =>
			(a, b) => {
				const aValue = a[columnName].toUpperCase()
				const bValue = b[columnName].toUpperCase()
				return aValue === bValue ? 0 : aValue < bValue ? -1 : 1
			}

		const propDescComparator = (columnName) =>
			(a, b) => {
				const aValue = a[columnName].toUpperCase()
				const bValue = b[columnName].toUpperCase()
				return aValue === bValue ? 0 : aValue > bValue ? -1 : 1
    	}

		if (sortOptions !== undefined) {
			let sortedData
			switch (sortOptions.order) {
				case 'ASC':
					sortedData = PersonData.sort(propAscComparator(sortOptions.dataName))
					break
				case 'DESC':
					sortedData = PersonData.sort(propDescComparator(sortOptions.dataName))
					break
				default:
					throw new Error('Invalid sort option specified')
			}
			return getRows(sortedData)
		}		
		return getRows(PersonData)
	})

	const personRpt = {
		dataSource: {
			reader: getPersonData,
			rowsPerPage: 10, // Specify -1 for all rows
			totalRows: PersonData.length,
		},
		columns: [
			{ type: 'image', heading: 'Avatar', dataName: 'avatarImg' },
			{ type: 'text', heading: 'email', dataName: 'email' },
			{ type: 'text', heading: 'First Name', dataName: 'firstName' },
			{ type: 'text', heading: 'Last Name', dataName: 'lastName' },
			{ type: 'pill', heading: 'Status', dataName: 'status',
					styles: [ 
						{ value: 'Active', pillColor: 'bg-green-400' },
						{ value: 'Inactive', pillColor: 'bg-red-400' },
					]
			}
		]
	}
</script>

<svelte:head>
	<title>Tabular Data Test</title>
</svelte:head>

<h1>Tabular Data Test</h1>

<Tabular definition={ personRpt } />

<style type="text/postcss">
	h1 {
		@apply text-center text-5xl text-green-700 uppercase font-semibold mb-2;
	}
</style>