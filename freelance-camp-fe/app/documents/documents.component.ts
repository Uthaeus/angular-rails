import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My first Doc",
      description: 'adsfasdlkfjas;fj adkfja;f',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://collectivehub.com/wp-content/uploads/2016/07/Things_successful_freelancers_do_at_home_body-1.jpg'
    },
    {
      title: "My Second Doc",
      description: 'adsfasdlkfjas;fj adkfja;f',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://assets.entrepreneur.com/content/3x2/1300/20180111134829-freelance-2906725-1920.png?width=750&crop=16:9'
    },
    {
      title: "My Last Doc",
      description: 'adsfasdlkfjas;fj adkfja;f',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://tctechcrunch2011.files.wordpress.com/2015/12/shutterstock_279072494.png'
    }
  ]
}