import React, { useState } from 'react';
// @ts-ignore
import { Spacer, Checkbox } from 'vcc-ui';


export interface ICheckboxGroupItem {
  name: string, 
  checked: boolean
}

export interface ICheckboxGroups {
  items: ICheckboxGroupItem[],
  onChange: Function,
}

const CheckboxGroup = ({ items, onChange, ...props }: ICheckboxGroups) => {
  const [
    selected,
    setSelected,
  ] = useState<ICheckboxGroupItem[]>(
    items,
  );


  const handleChange = (checkbox: ICheckboxGroupItem) => {
    const newState = [
      ...selected,
    ];
    const recordNo: number = selected.findIndex(
      (checkboxRecord: ICheckboxGroupItem) => checkboxRecord.name === checkbox.name,
    );
    if (recordNo !== -1) {
      newState[recordNo] = checkbox;
      setSelected(newState);
      onChange(newState);
    }
  }


  return <>
      {selected.map(
        (item: ICheckboxGroupItem, i: number) => {
          return (
            <React.Fragment key={`checkbox-${i}`}>
              <Spacer key={`spacer-${i}`} />
              <Checkbox
                label={item.name}
                key={`${i}-car`}
                value={item.name}
                checked={item.checked}
                onChange={() => handleChange({...item, checked: !item.checked})} />
              </React.Fragment>
            )
        },
      )}
      </>;
}

export default CheckboxGroup;