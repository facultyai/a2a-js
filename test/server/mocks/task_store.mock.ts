import sinon, { SinonStub } from 'sinon';
import { ListTasksParams, ListTasksResult, Task } from '../../../src/index.js';
import { TaskStore } from '../../../src/server/store.js';

export class MockTaskStore implements TaskStore {
  public save: SinonStub<[Task], Promise<void>> = sinon.stub();
  public load: SinonStub<[string], Promise<Task | undefined>> = sinon.stub();
  public list: SinonStub<[ListTasksParams], Promise<ListTasksResult>> = sinon.stub();
}
