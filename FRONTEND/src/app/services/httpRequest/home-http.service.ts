import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Item } from '../../views/home/models/item.model';

@Injectable({
    providedIn: 'root',
})
export class HomeHttpService {
    constructor(private http: HttpClient) {}

    getCards() {
        return this.http.get(`${environment.BASE_PATH}cards`);
    }

    postCard(payload: Item) {
        return this.http.post(`${environment.BASE_PATH}cards`, payload);
    }

    putCard(payload: Item) {
        return this.http.put(
            `${environment.BASE_PATH}cards/${payload.id}`,
            payload
        );
    }

    deleteCard(id: Item) {
        return this.http.delete(`${environment.BASE_PATH}cards/${id}`);
    }
}
