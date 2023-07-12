
import { Prisma } from '@prisma/client'



const primsa = new Prisma()

export default function Test() {

    const handle = async (e) => {
        "use server"
        console.log(e)
      }
  return (
    <div>

<h1>je suis le title</h1>

<form action={handle}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
