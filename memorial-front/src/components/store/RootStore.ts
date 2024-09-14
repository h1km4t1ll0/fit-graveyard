import {flow, types} from 'mobx-state-tree';
import axios, {AxiosResponse} from 'axios';

export const Student = types.model({
  id: types.number,
  name: types.string,
  image: types.string,
  from: types.string,
  to: types.string,
  additionalText: types.maybeNull(types.string),
  supportCount: types.number,
  candlesCount: types.number,
  studentStatus: types.string,
});

const RootStore = types.model({
  students: types.array(Student),
  header: types.string,
  headerBody: types.string,
  body: types.string,
  footer: types.string,
}).actions(
  (self) => ({
    fetchData: flow(function* () {
      const siteSettings = yield axios.get(`${import.meta.env.VITE_API_URL}/api/site-setting`);
      const studentsResponse: AxiosResponse<{
        data: {
          id: number,
          attributes: {
            name: string,
            image: string | null,
            from: string | null,
            to: string | null,
            additionalText: string | null,
            supportCount: number,
            candlesCount: number,
            studentStatus: "BAD" | "ALIVE" | "UNKNOWN" | "DROPPED",
          },
        }[],
      }> = yield axios.get(`${import.meta.env.VITE_API_URL}/api/memorial-users?sort=id:desc`);
      // @ts-expect-error TS2322
      self.students = studentsResponse.data.data.map(
        (student) =>
          Student.create({
            id: student.id,
            name: student.attributes.name ?? 'Нет имени...',
            image: student.attributes.image ?? 'https://via.placeholder.com/150',
            from: student.attributes.from?.split('-').join('.') ?? '...',
            to: student.attributes.to?.split('-').join('.') ?? '...',
            additionalText: student.attributes.additionalText ?? null,
            supportCount: student.attributes.supportCount ?? 0,
            candlesCount: student.attributes.candlesCount ?? 0,
            studentStatus: student.attributes.studentStatus,
          }),
      );
      self.header = siteSettings.data.data.attributes.header as string;
      self.headerBody = siteSettings.data.data.attributes.footerText;
      self.footer = siteSettings.data.data.attributes.footerText;
      self.headerBody = siteSettings.data.data.attributes.headerBodyText;
    }),
  })
);

export const rootStore = RootStore.create({
  students: [],
  header: '',
  body: '',
  footer: '',
  headerBody: '',
});

// rootStore.fetchData().then(
//   () => console.log('Получение данных успешно!')
// ).catch(
//   (err) => console.error(`Возникла ошибка: ${err}`)
// );
