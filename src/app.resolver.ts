import { Args, Query, Resolver } from '@nestjs/graphql';
import { createWriteStream } from 'fs';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import * as path from 'path';
import * as stream from 'stream';
import { promisify } from 'util';

const pipeline = promisify(stream.pipeline);

@Resolver()
export class AppResolver {
  @Query(() => String)
  hello() {
    return 'Hello World!';
  }

  @Query(() => String)
  async upload(
    @Args({ name: 'image', type: () => GraphQLUpload })
    image: FileUpload
  ) {
    const rs = image.createReadStream();

    const ws = createWriteStream(path.join('uploads', image.filename));

    await pipeline(rs, ws);

    return image.filename;
  }
}
