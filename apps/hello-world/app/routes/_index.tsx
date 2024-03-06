import { Avatar, Button } from '@nextui-org/react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
			<h1 className="text-blue-500">Welcome to Remix</h1>
			<div className="flex gap-4 items-center">
				<Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
				<Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
				<Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
				<Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
				<Avatar isBordered color="warning" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
				<Avatar isBordered color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
			</div>
			<Button color="primary">Button</Button>
			<ul>
				<li>
					<a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
						15m Quickstart Blog Tutorial
					</a>
				</li>
				<li>
					<a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
						Deep Dive Jokes App Tutorial
					</a>
				</li>
				<li>
					<a target="_blank" href="https://remix.run/docs" rel="noreferrer">
						Remix Docs
					</a>
				</li>
			</ul>
		</div>
	)
}
