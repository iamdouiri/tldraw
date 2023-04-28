import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/editor.css'
import '@tldraw/tldraw/ui.css'
import { useState } from 'react'

/**
 * event types: (WIP)
 *
 *  - [ ] document:load_current
 *  - [ ] document:new
 *  - [ ] document:open
 *  - [ ] document:save
 *  - [ ] document:close
 *  - [ ] page:change
 *  - [ ] page:add
 *  - [ ] page:remove
 *  - [ ] page:rename
 *  - [ ] document:focus_{on,off}
 *  - [ ] document:grid_{on,off}
 *  - [ ] document:tool_lock_{on,off}
 *  - [ ] document:snapping_{on,off}
 *  - [ ] document:print
 *  - [ ] document:copy
 *  - [ ] document:export
 *  - [ ] shape:embed:create
 *  - [ ] shape:embed:convert_bookmark
 *  - [ ] shape:geo:create
 *  - [ ] shape:geo:change
 *  - [ ] shape:geo:remove
 *  - [ ] multiplayer:join
 *  - [ ] multiplayer:reconnect
 *  - [ ] multiplayer:leave
 *  - [ ] multiplayer:conflict
 *  - [ ] ui:enter_desktop
 *  - [ ] ui:exit_desktop
 *  - [ ] ui:enter_mobile
 *  - [ ] ui:exit_mobile
 *  - [ ] ui:btn:trash
 *  - [ ] ui:btn:duplicate
 *
 * @returns
 */
export default function Example() {
	const [_uiEvents, setUiEvents] = useState<string[]>([])
	const [uiEventLog, setUiEventLog] = useState('')
	const onUiEvent = (eventName: string, eventData: any) => {
		// eslint-disable-next-line no-console
		console.log('[%cui-event%c]', 'color: red', 'color: initial', eventName)
		setUiEvents((old) => old.concat(eventName))
		let message = eventName
		if (eventData !== null && eventData !== undefined) {
			message +=  "=" + JSON.stringify(eventData, null, 2)
		}
		setUiEventLog(old => old + message + '\n')
	}
	return (
		<div style={{ display: 'flex' }}>
			<div style={{ width: '60vw', height: '100vh' }}>
				<Tldraw autoFocus onUiEvent={onUiEvent} />
			</div>
			<textarea
				style={{
					width: '40vw',
					height: '100vh',
					padding: 8,
					background: '#eee',
					border: 'none',
					borderLeft: 'solid 2px #333',
				}}
				value={uiEventLog}
				disabled={true}
			/>
		</div>
	)
}