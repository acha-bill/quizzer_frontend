import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searching-opponent',
  templateUrl: './searching-opponent.component.html',
  styleUrls: ['./searching-opponent.component.scss']
})
export class SearchingOpponentComponent implements OnInit {
  public placeHolderImages = [{ user_img: 'user1', user_name: 'Mary Doe' },
    { user_img: 'user2', user_name: 'Peter Doe' }, { user_img: 'user3', user_name: 'Neba John' },
    { user_img: 'user4', user_name: 'Fru Doe' }];

  public placeHolderAvatar: {user_img: string, user_name: string};
  constructor() { }

  ngOnInit(): void {
    this.rapidlyChangeAvatars();
  }

  rapidlyChangeAvatars() {
    setInterval(() => {
      const userImg = Math.floor(Math.random() * Math.floor(this.placeHolderImages.length));
      this.placeHolderAvatar = this.placeHolderImages[userImg];
    }, 200);
  }

}
