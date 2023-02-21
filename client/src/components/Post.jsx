import { Link } from 'react-router-dom'

const Post = ({
  id,
  title,
  description,
  category,
  image,
  likes,
  createdAt,
  user,
}) => {
  return (
    <article class="flex bg-white transition hover:shadow-xl">
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          datetime="2022-10-10"
          class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{new Date(createdAt).toDateString()}</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>{user.username}</span>
        </time>
      </div>

      <div class="hidden sm:block sm:basis-56">
        <img
          alt="image-article"
          src={image}
          class="aspect-square h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 class="font-bold uppercase text-gray-900">{title}</h3>
          </a>

          <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
            {description}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>

        <div class="sm:flex sm:items-end sm:justify-end">
          <Link
            href="/posts/:id"
            class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Post