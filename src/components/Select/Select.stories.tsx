import {Option, Select} from './Select';
import {useState} from 'react';

export default {
  title: 'Select',
  component: Select,
}

const cities: Option[] = [
  {title: 'Москва', value: 'moscow'},
  {title: 'Киев', value: 'kyiv'},
  {title: 'Минск', value: 'minsk'},
]

export const FullFeaturedWithSetInitial = () => {
  const [value, setValue] = useState<string>('minsk')
  return <Select
    value={value}
    setValue={setValue}
    options={cities}
  />
}

export const FullFeaturedUnsetAndExpanded = () => {
  const [value, setValue] = useState<string | null>(null)
  return <Select
    value={value}
    setValue={setValue}
    options={cities}
    startExpanded={true}
  />
}

export const FullFeaturedUnsetWithCustomPlaceholder = () => {
  const [value, setValue] = useState<string | null>(null)
  return <Select
    value={value}
    setValue={setValue}
    placeholder={'Столица'}
    options={cities}
  />
}