import { Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  SCENE_METADATA,
  UPDATE_LISTENER_METADATA,
  UPDATE_METADATA,
} from './telegraf.constants';
import { ListenerMetadata } from './interfaces';

@Injectable()
export class TelegrafMetadataAccessor {
  constructor(private readonly reflector: Reflector) {}

  isUpdate(target: Function): boolean {
    return !!this.reflector.get(UPDATE_METADATA, target);
  }

  isScene(target: Function): boolean {
    return !!this.reflector.get(SCENE_METADATA, target);
  }

  getListenerMetadata(target: Function): ListenerMetadata | undefined {
    return this.reflector.get(UPDATE_LISTENER_METADATA, target);
  }

  getSceneMetadata(target: Function): string | undefined {
    return this.reflector.get(SCENE_METADATA, target);
  }
}