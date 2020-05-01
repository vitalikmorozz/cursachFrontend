import React from 'react';
import styled from 'styled-components';

const SortButton = styled.div`
	width: 20px;
	height: 20px;
	display: inline-block;
	background: #3498db;
	color: #ecf0f1;
	font-weight: 900;
	border-radius: 5px;
	border: 2px solid #2980b9;
	box-sizing: border-box;
	text-align: center;
	align-content: center;
	font-size: 11px;
	cursor: pointer;
`;

const SearchButton = ({ setSortField, fieldName }) => {
	return <SortButton onClick={() => setSortField(fieldName[0].toLowerCase() + fieldName.slice(1))}>⇅</SortButton>;
};

export default SearchButton;
