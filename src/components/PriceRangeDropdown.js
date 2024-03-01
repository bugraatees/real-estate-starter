import React, {useState, useEffect, useContext} from 'react';

//import icons
import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//import headless ui
import {Menu} from '@headlessui/react';

//import house context
import {HouseContext} from './HouseContext';

const PriceRangeDropdown = () => {
  const {price, setPrice} = 
  useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      value : 'Price range (any)',
    },
    {
      value : '1.000.000 - 1.500.000',
    },
    {
      value : '1.500.000 - 2.000.000',
    },
    {
      value : '2.000.000 - 2.500.000',
    },
    {
      value : '2.500.000 - 3.000.000',
    },
    {
      value : '3.000.000 - 3.500.000',
    },
  ]

  return(
  <Menu as="div" className='dropdown relative'>
    <Menu.Button onClick={() => setIsOpen (!isOpen)} className='dropdown-btn w-full text-left'>
      <RiWallet3Line
        className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Ücret Aralığı Seç</div>
          {isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
            ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
              )
          }
        </div>
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {prices.map((price, index) => {
        return(
          <Menu.Item 
          onClick={() => setPrice(price.value)}
          className='cursor-pointer hover:text-violet-700 transition'
           as='li' key={index}>{price.value}</Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>
  );
};

export default PriceRangeDropdown;
