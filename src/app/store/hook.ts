import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import type { RootState, AppDispatch } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useNavigator = useNavigate
export const useAppIntl = useIntl
